import React from 'react';
import { LICENSE_DATA, type LicenseItem } from '../types/LicenseData';

const LicenseSection: React.FC = () => {
  return (
    <div className="block">
      <h2 className="blocktitle sacramento -effecttitle">
        <span className="inwrap">License</span>
      </h2>

      <div className="historydl1 -effect"><div className="inwrap"><p className="param"></p><dl>
        {LICENSE_DATA.map((item: LicenseItem, index: number) => (
          <div key={index}>
            <dt>{item.year}</dt>
            <dd>
              {item.title}
              {item.description && (
                <span className="small">({item.description})</span>
              )}
            </dd>
          </div>
        ))}
      </dl></div></div></div>
  );
};

export default LicenseSection;
