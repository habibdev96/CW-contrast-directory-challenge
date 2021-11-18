import { useState } from 'react';
import styled from 'styled-components';
import { TabButton } from './styledElements/Buttons.styled';
import ResourceCard from './ResourceCard';
import { resourcesTabData, resourcesData } from '../data';
import { maxWidthLg, sectionSpacingSm, threeCol } from '../abstracts/Mixins';
import { media } from '../abstracts/Responsive';

const Container = styled.div`
  ${maxWidthLg}

  .tabs {
    padding: 0 2rem;

    ${media.sm} {
      text-align: center;
    }
  }

  .cards {
    ${sectionSpacingSm}
    ${threeCol}
  }
`;

const Resources = (): JSX.Element => {
  const [value, setValue] = useState<number>(0);

  return (
    <section>
      <Container>
        <div className='tabs'>
          {resourcesTabData.map((tab, index) => (
            <TabButton
              key={tab.id}
              onClick={(): void => setValue(index)}
              className={`${index === value && 'active'}`}
            >
              {tab.title}
            </TabButton>
          ))}
        </div>
        <div className='cards'>
          {resourcesData[value].map((card) => (
            <ResourceCard key={card.id} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Resources;
