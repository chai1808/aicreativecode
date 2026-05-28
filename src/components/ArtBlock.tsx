import React from 'react';
import { ART_DATA, type ArtItem } from '../types/ArtData';

import VeilCloudPink from './p5/VeilCloudPink';
import DotsTime from './p5/DotsTime';

const ArtBlock: React.FC = () => {
  return (
    <>
      <div className="imagelist -effect">
        <ul>
          {ART_DATA.map((item: ArtItem, index: number) => (
            <li key={index}>
              <div className="img">
                <div className="imgcover"></div>
                <a href={item.imageSrc} data-lity>
                  <img src={item.imageSrc} alt={item.altText} />
                </a>
              </div>
              <p className="cap">{item.caption}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="imagelist _p5js -effect">
        <ul>
          <li>
            <div className="img">
              <div className="imgcover"></div>
              <VeilCloudPink />
            </div>
          </li>
          <li>
            <div className="img">
              <div className="imgcover"></div>
              <DotsTime />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ArtBlock;
