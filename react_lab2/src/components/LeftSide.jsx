import '../index.css';
import Image from './Image';
import Stats from './Stats';

const LeftSide = ({sum}) => {
    return(
        <>
<img src="https://send.monobank.ua/img/logo_short.png" alt="monobank logo" className = 'mt-[42px] mx-auoto mb-[24px]'/>
<div className ="relative">
    <Image/>
</div>
<div className="font-[500] text-[14px] text-center">
    <span>Артем К. збирає</span>
</div>
<div className="font-[900] text-[22px] mb-[12px]">
    <span>На ремонт медеваку </span>
</div>
            <div className="font-[500] text-[15px] mt-[8px] text-center">
                <div>Збираємо на ремонт медеваку для 4ОТБР танкова бригада</div>
                <div className="mt-[4px]">Ремонтуємо 2 автівки - Тойоту та Нісан.</div>
                <div className="mt-[4px]">У бригаді є наші земляки з Черкащини!</div>
                <div className="mt-[4px]">Ремонт авто треба на вчора! Прохання підтримати!</div>
            </div>
<div className="mt-[10px] flex flex-col items-center">
<Stats sum = {sum}/>
</div>
        </>
    )
}

export default LeftSide;
    
    
    
