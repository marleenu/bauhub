import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Breadcrumbs = () => {
  return (
    <div>
      <span className="mr-2 text-secondary hover:text-primary transition duration-900">
        Documents
      </span>
      <FontAwesomeIcon icon={faCaretRight as IconProp} />
      <span className="ml-2 font-bold">Procurement documents</span>
    </div>
  );
};

export default Breadcrumbs;
