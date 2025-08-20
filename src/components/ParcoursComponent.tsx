import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import React from 'react';
import FlagIcon from '@mui/icons-material/Flag';
import { useTranslation } from "react-i18next";
import "../i18n";

// Typage des props pour TimelineItem
interface TimelineItemProps {
  date: string;
  icon: React.ReactElement;
  title: string;
  subtitle?: string;
  description?: string;
  bgColor?: string;
}

function TimelineItem({
  date,
  icon,
  title,
  subtitle,
  description,
  bgColor = 'rgb(33,150,243)',
}: TimelineItemProps) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--custom"
      date={date}
      contentStyle={{
        background: "rgb(55, 65, 81)",
        color: "#fff",
        borderBottom: `3px solid ${bgColor}`, // ✅ replaces the white bar
        boxShadow: "none", // remove default white shadow
      }}

      contentArrowStyle={{ borderRight: `7px solid ${bgColor}` }}
      iconStyle={{ background: bgColor, color: '#fff' }}
      icon={icon}
    >
      <h3 className="vertical-timeline-element-title font-bold ">{title}</h3>
      {subtitle && <h4 className="vertical-timeline-element-subtitle italic text-gray-300">{subtitle}</h4>}
      {description && <p>{description}</p>}
    </VerticalTimelineElement>
  );
}



function ParcoursAcademiqueSection() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col p-6 rounded-2xl w-full text-left whitespace-pre-line">
      <VerticalTimeline>
        <TimelineItem
          date={t('parcours.academicJourney.items.0.date')}
          icon={<SchoolIcon sx={{ fontSize: 40, width: '100%', height: '100%' }} />}
          title={t('parcours.academicJourney.items.0.title')}
          subtitle={t('parcours.academicJourney.items.0.subtitle')}
          description={t('parcours.academicJourney.items.0.description')}
          bgColor="rgb(5, 150, 105)"
        />
        <TimelineItem
          date={t('parcours.academicJourney.items.1.date')}
          icon={<SchoolIcon sx={{ fontSize: 40, width: '100%', height: '100%' }} />}
          title={t('parcours.academicJourney.items.1.title')}
          subtitle={t('parcours.academicJourney.items.1.subtitle')}
          description={t('parcours.academicJourney.items.1.description')}
          bgColor="rgb(5, 150, 105)"
        />
        <TimelineItem
          date={t('parcours.academicJourney.items.2.date')}
          icon={<SchoolIcon sx={{ fontSize: 40, width: '100%', height: '100%' }} />}
          title={t('parcours.academicJourney.items.2.title')}
          subtitle={t('parcours.academicJourney.items.2.subtitle')}
          description={t('parcours.academicJourney.items.2.description')}
          bgColor="rgb(5, 150, 105)"
        />
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(5, 150, 105)', color: '#fff' }}
          icon={<FlagIcon />}
        />
      </VerticalTimeline>
    </section>
  );
}


function ParcoursProSection() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col p-6 rounded-2xl w-full text-left whitespace-pre-line">
      <VerticalTimeline>
        <TimelineItem
          date={t('parcours.professionalJourney.items.0.date')}
          icon={<SchoolIcon />}
          title={t('parcours.professionalJourney.items.0.title')}
          subtitle={t('parcours.professionalJourney.items.0.subtitle')}
          description={t('parcours.professionalJourney.items.0.description')}
          bgColor="rgb(5, 150, 105)"
        />
        <TimelineItem
          date={t('parcours.professionalJourney.items.1.date')}
          icon={<WorkIcon />}
          title={t('parcours.professionalJourney.items.1.title')}
          subtitle={t('parcours.professionalJourney.items.1.subtitle')}
          description={t('parcours.professionalJourney.items.1.description')}
          bgColor="rgb(5, 150, 105)"
        />
        <TimelineItem
          date={t('parcours.professionalJourney.items.2.date')}
          icon={<WorkIcon />}
          title={t('parcours.professionalJourney.items.2.title')}
          subtitle={t('parcours.professionalJourney.items.2.subtitle')}
          bgColor="rgb(5, 150, 105)"
        />
        <TimelineItem
          date={t('parcours.professionalJourney.items.3.date')}
          icon={<WorkIcon />}
          title={t('parcours.professionalJourney.items.3.title')}
          subtitle={t('parcours.professionalJourney.items.3.subtitle')}
          bgColor="rgb(5, 150, 105)"
        />
        <TimelineItem
          date={t('parcours.professionalJourney.items.4.date')}
          icon={<WorkIcon />}
          title={t('parcours.professionalJourney.items.4.title')}
          subtitle={t('parcours.professionalJourney.items.4.subtitle')}
          bgColor="rgb(5, 150, 105)"
        />
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(5, 150, 105)', color: '#fff' }}
          icon={<FlagIcon />}
        />
      </VerticalTimeline>
    </section>
  );
}


export function ParcoursComponent() {
  const { t } = useTranslation();

  return (
    <div
      id="parcours"
      className="mb-8 mt-4 flex flex-col w-full items-center text-center"
    >
      <h1 className="py-10 text-3xl sm:text-4xl text-emerald-600 font-bold mb-6">
        {t("parcours.title")}
      </h1>

      <Tabs defaultValue="academique" className="w-full">
        <TabsContent value="academique">
          <ParcoursAcademiqueSection />
        </TabsContent>
        <TabsContent value="pro">
          <ParcoursProSection />
        </TabsContent>

        <div className="flex justify-center w-full mt-6">
          <TabsList className="grid w-96 grid-cols-2 gap-2">
            <TabsTrigger
              value="academique"
              className="px-2 py-1 text-sm data-[state=active]:bg-gray-600 data-[state=active]:text-white data-[state=active]:shadow-lg"
            >
              {t("parcours.academicJourney.title")}
            </TabsTrigger>
            <TabsTrigger
              value="pro"
              className="px-2 py-1 text-sm data-[state=active]:bg-gray-600 data-[state=active]:text-white data-[state=active]:shadow-lg"
            >
              {t("parcours.professionalJourney.title")}
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>
    </div>
  );
}
