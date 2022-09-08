import React from 'react';
import Background from '../components/Background';
import { SimpleTag as Tag, TagGroup } from '../components/Tag';

const DesignSystem = () => {
  return (
    <div>
      <Background className="bg-white">
        <TagGroup>
          <Tag
            href="/a/purpleLight"
            text="href:purpleLight Tag"
            color="purpleLight"
            appearance="default"
          />
          <Tag
            text="redLight Tag"
            color="redLight"
            appearance="default"
            isRemovable
          />
          <Tag
            href="/a/redLight"
            text="href:redLight Tag"
            color="redLight"
            appearance="default"
            removeButtonLabel="Remove"
          />
          <Tag
            text="yellowLight Tag"
            color="yellowLight"
            appearance="default"
          />
          <Tag
            href="/a/yellowLight"
            text="href:yellowLight Tag"
            color="yellowLight"
            appearance="default"
          />
          <Tag text="greyLight Tag" color="greyLight" appearance="default" />
          <Tag
            href="/a/greyLight"
            text="href:greyLight Tag"
            color="greyLight"
            appearance="default"
          />
        </TagGroup>
      </Background>
    </div>
  );
};

export default DesignSystem;
