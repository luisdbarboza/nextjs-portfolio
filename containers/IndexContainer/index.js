import MainLayout from '../../layouts/MainLayout';
import ProfilePresentation from '../../components/Index/ProfilePresentation';
import Timeline from '../../components/Index/Timeline';
import TimelineItem from '../../components/Index/TimelineItem';
import timelineItemsData from '../../data/timelineItems';
import Skills from '../../components/Index/Skills';

const timelineItems = timelineItemsData.map((itemData, index) => {
  const direction = index % 2 === 0 ? 'right' : 'left';

  return (
    <TimelineItem
      key={itemData.heading + itemData.year}
      year={itemData.year}
      heading={itemData.heading}
      subheading={itemData.subheading}
      description={itemData.description}
      image={itemData.image}
      direction={direction}
    />
  );
});

export default function IndexContainer() {
  return (
    <MainLayout>
      <ProfilePresentation />
      <Timeline>{timelineItems}</Timeline>
      <Skills />
    </MainLayout>
  );
}
