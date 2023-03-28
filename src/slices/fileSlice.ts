import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityId,
  PayloadAction
} from '@reduxjs/toolkit';
import { IFileEntity } from '../models/IFileEntity';
import { RootState } from '../app/store';
import { deleteFile, fetchFiles } from '../api/fileApi';
import { StateStatus } from '../models/StateStatus';
import { DropResult } from 'react-beautiful-dnd';

export const fileAdapter = createEntityAdapter<IFileEntity>({
  selectId: (fileEntity) => fileEntity.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name)
});

const initialState = fileAdapter.getInitialState<{
  filter: Array<EntityId>;
  selected: Array<EntityId>;
  status: StateStatus;
}>({
  filter: [] as Array<EntityId>,
  selected: [] as Array<EntityId>,
  status: StateStatus.INITIAL
});

export const fetchFilesAsync = createAsyncThunk('fileSlice/fetchFiles', async () => {
  return fetchFiles();
});

export const deleteFileAsync = createAsyncThunk(
  'fileSlice/deleteFiles',
  async (fileId: EntityId) => {
    return deleteFile(fileId);
  }
);

export const fileSlice = createSlice({
  name: 'fileSlice',
  initialState: initialState,
  reducers: {
    addFile: (state, action: PayloadAction<IFileEntity>) => {
      fileAdapter.upsertOne(state, action.payload);
    },
    addFiles: (state, action: PayloadAction<Array<IFileEntity>>) => {
      fileAdapter.upsertMany(state, action.payload);
    },
    toggleSelected: (state, action: PayloadAction<EntityId>) => {
      const alreadySelected = state.selected.some((id) => id === action.payload);
      if (alreadySelected) state.selected = state.selected.filter((id) => id !== action.payload);
      if (!alreadySelected) state.selected = [...state.selected, action.payload];
    },
    toggleMasterCheckbox: (state) => {
      const isChecked = state.ids.length === state.selected.length;
      state.selected = isChecked ? [] : state.ids;
    },
    handleFileOrdering: (state, action: PayloadAction<DropResult>) => {
      const { destination, source, draggableId } = action.payload;
      const ids = [...state.ids];
      if (destination?.index) {
        ids.splice(source.index, 1);
        ids.splice(destination?.index, 0, draggableId);
        state.ids = ids;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilesAsync.pending, (state) => {
        state.status = StateStatus.PENDING;
      })
      .addCase(fetchFilesAsync.fulfilled, (state, action) => {
        state.status = StateStatus.FULFILLED;
        fileAdapter.setMany(state, action.payload);
      })
      .addCase(deleteFileAsync.pending, (state) => {
        state.status = StateStatus.PENDING;
      })
      .addCase(deleteFileAsync.fulfilled, (state, action) => {
        state.status = StateStatus.FULFILLED;
        state.filter = state.filter.filter((id) => id !== action.payload.id);
        fileAdapter.removeOne(state, action.payload.id);
      });
  }
});

export const {
  selectAll: selectAllFiles,
  selectById: selectFileById,
  selectTotal: selectFileCount
} = fileAdapter.getSelectors((state: RootState) => state.file);

export const { addFile, toggleSelected, toggleMasterCheckbox, handleFileOrdering } =
  fileSlice.actions;

export const selectFileStateStatus = (state: RootState) => state.file.status;
export const selectIsMasterCheckboxSelected = (state: RootState) => {
  return state.file.selected.length === state.file.ids.length;
};
export const selectIsFileSelected = (state: RootState, itemId: EntityId) =>
  state.file.selected.some((id: EntityId) => id === itemId);
export const selectSelectedFileIds = (state: RootState) => state.file.selected;

export default fileSlice.reducer;
