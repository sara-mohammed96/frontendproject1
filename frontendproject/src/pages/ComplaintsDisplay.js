
import ComplaintsHeader from '../components/ComplaintsDisplay/ComplaintsHeader';
import ComplaintsSideBar from '../components/ComplaintsDisplay/ComplaintsSideBar';
import { Container, Box, Grid , Modal , Hidden ,Typography} from '@material-ui/core';
import ComplaintsMessage from  '../components/ComplaintsDisplay/ComplaintsMessage';
//data mockup
const data=[{id:1,
    title:'قضية مالية ',
    date:'12/5/2021',
    text:'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستر سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا',
    fullName:'علي احمد',
    phoneNumber:'07712111111',
    email:'ali@gmail.com',
    carerr:'استاذ',
    collegeName:'تربية اساسية',
    department:'رياضيات'},
    {id:2,
    title:'قضية مالية ',
    date:'12/5/2021',
    text:'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستر سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا',
    fullName:'علي احمد',
    phoneNumber:'07712111111',
    email:'ali@gmail.com',
    carerr:'استاذ',
    collegeName:'تربية اساسية',
    department:'رياضيات'},
    {id:2,
        title:'قضية مالية ',
        date:'12/5/2021',
        text:'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستر سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا',
        fullName:'علي احمد',
        phoneNumber:'07712111111',
        email:'ali@gmail.com',
        carerr:'استاذ',
        collegeName:'تربية اساسية',
        department:'رياضيات'},
        {id:2,
            title:'قضية مالية ',
            date:'12/5/2021',
            text:'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستر سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا',
            fullName:'علي احمد',
            phoneNumber:'07712111111',
            email:'ali@gmail.com',
            carerr:'استاذ',
            collegeName:'تربية اساسية',
            department:'رياضيات'},
            {id:2,
                title:'قضية مالية ',
                date:'12/5/2021',
                text:'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستر سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايتنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا',
                fullName:'علي احمد',
                phoneNumber:'07712111111',
                email:'ali@gmail.com',
                carerr:'استاذ',
                collegeName:'تربية اساسية',
                department:'رياضيات'},
    ]
function ComplaintsDisplay() {
  return (
    <div>
      <ComplaintsSideBar value={data}/>
      <ComplaintsMessage value={data}/>
    </div>
  );
}

export default ComplaintsDisplay;
