import { CoveredCoughSvg, FaceMaskSvg, HandSanitizerSvg, HelpPhoneSvg, NewspaperSvg, ProtectedFaceSvg, SocialDistancingSvg, WarningMallSvg } from '../../images';

export const RecommendedMeasures = [
    {
        title: 'Wash your hands frequently',
        content: 'Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.',
        img: HandSanitizerSvg,
        img_desc: 'Wash your hands frequently'
    },
    {
        title: 'Maintain social distance',
        content: 'Maintain at least 1 metre (3 feet) distance between yourself and others.',
        img: SocialDistancingSvg,
        img_desc: 'Maintain social distance'
    },
    {
        title: 'Stay clear of crowds',
        content: 'Avoid going to crowded places.',
        img: WarningMallSvg,
        img_desc: 'Stay clear of crowds'
    },
    {
        title: 'Avoid touching your face',
        content: 'Avoid touching eyes, nose and mouth.',
        img: ProtectedFaceSvg,
        img_desc: 'Avoid touching your face'
    },
    {
        title: 'Practice respiratory hygiene',
        content: 'Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately and wash your hands.',
        img: CoveredCoughSvg,
        img_desc: 'Practice respiratory hygiene'
    },
    {
        title: 'Behave consciously',
        content: 'Stay home and self-isolate even with minor symptoms such as cough, headache, mild fever, until you recover. Have someone bring you supplies. If you need to leave your house, wear a mask to avoid infecting others.',
        img: FaceMaskSvg,
        img_desc: 'Behave consciously'
    },
    {
        title: 'Seek medical care',
        content: 'If you have a fever, cough and difficulty breathing, seek medical attention, but call by telephone in advance if possible and follow the directions of your local health authority.',
        img: HelpPhoneSvg,
        img_desc: 'Seek medical care'
    },
    {
        title: 'Stay updated',
        content: 'Keep up to date on the latest information from trusted sources, such as WHO or your local and national health authorities.',
        img: NewspaperSvg,
        img_desc: 'Stay updated'
    },
];