import { CardDeadSvg, CardInfectedSvg, CardRecoveredSvg } from '../../images';

export const CardType = {
    NEUTRAL: 0,
    POSITIVE: 1,
    NEGATIVE: 2,
  };

export const CardValues = [
    {
        title: 'RECOVERED',
        value: 100000000,
        img: CardRecoveredSvg,
        type: CardType.POSITIVE,
    },
    {
        title: 'INFECTED',
        value: 100000000,
        img: CardInfectedSvg,
        type: CardType.NEUTRAL,
    },
    {
        title: 'DEAD',
        value: 100000000,
        img: CardDeadSvg,
        type: CardType.NEGATIVE,
    },
];