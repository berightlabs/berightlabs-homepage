export type WorkItem = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export const workSection = {
  number: '01',
  title: '작업 영역',
} as const;

export const workItems: WorkItem[] = [
  {
    id: 'problem-field',
    number: '01',
    title: 'Problem Field',
    description: '복잡한 운영 환경 안에서 반복 업무, 병목, 판단 지점을 확인합니다.',
  },
  {
    id: 'operation-design',
    number: '02',
    title: 'Operation Design',
    description: '문서, 데이터, 일정, 비용, 의사결정 흐름을 처리 가능한 구조로 재설계합니다.',
  },
  {
    id: 'operating-workflow',
    number: '03',
    title: 'Operating Workflow',
    description: '반복 업무, 문서 처리, 데이터 정리, 일정 관리, 의사결정 흐름을 재구성합니다.',
  },
  {
    id: 'automation-tools',
    number: '04',
    title: 'Automation Tools',
    description: '반복되는 작업을 줄이기 위한 도구와 스크립트를 설계하고 구축합니다.',
  },
  {
    id: 'ai-built-products',
    number: '05',
    title: 'AI-built Products',
    description: '웹, 앱, 내부 도구 등 필요한 제품을 템플릿에 의존하지 않고 구축합니다.',
  },
  {
    id: 'commercialization-advisory',
    number: '06',
    title: 'Commercialization / Advisory',
    description: '실제 사용 가치가 확인된 도구와 구조는 서비스화하거나 컨설팅 형태로 확장할 수 있습니다.',
  },
];
