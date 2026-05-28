import React from 'react';
import {
  EDUCATIONAL_DATA,
  type EducationalItem,
} from '../types/EducationalData';

const EducationalSection: React.FC = () => {
  return (
    <div className="block">
      <h2 className="blocktitle sacramento -effecttitle">
        <span className="inwrap">Educational</span>
      </h2>

      <div className="txtbox -effect _1 tcspl">
        <div className="inwrap">
          <ul>
            {EDUCATIONAL_DATA.map((item: EducationalItem, index: number) => (
              <li key={index}>・{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducationalSection;
