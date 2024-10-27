import Menu from "@/app/components/Menu";
import dashboardIcon from '@/app/assets/dashboard.svg'
import attendanceIcon from '@/app/assets/attendance.svg'
import homeworkIcon from '@/app/assets/Homework.svg'
import quizIcon from '@/app/assets/quiz.svg'
import solutionIcon from '@/app/assets/solution.svg'
import resultIcon from '@/app/assets/result.svg'
import classScheduleIcon from '@/app/assets/schedule.svg'
import exmRoutineIcon from '@/app/assets/exm_routine.svg'
import questionIcon from '@/app/assets/question.svg'
import studyMaterialIcon from '@/app/assets/material.svg'
import accountIcon from '@/app/assets/account.svg'
import settingIcon from '@/app/assets/settings.svg'
import chevron from '@/app/assets/chevron.svg'

const MenuList = [
    {
        id: 1,
        name: 'Dashboard',
        image: dashboardIcon,
        link: '#',
    },
    {
        id: 2,
        name: 'Attendance',
        image: attendanceIcon,
        link: '/student/attendance',
    },
    {
        id: 3,
        name: 'Homework',
        image: homeworkIcon,
        link: '/student/homework',
    },
    {
        id: 4,
        name: 'Quiz',
        image: quizIcon,
        link: '/student/quiz',
    },
    {
        id: 5,
        name: 'Solution',
        image: solutionIcon,
        link: '/student/solution',
    },
    {
        id: 6,
        name: 'Result',
        image: resultIcon,
        link: '/student/result',
    },
    {
        id: 7,
        name: 'Class Schedule',
        image: classScheduleIcon,
        link: '/student/class_schedule',
    },
    {
        id: 8,
        name: 'Exam Routine',
        image: exmRoutineIcon,
        link: '/student/exam_routine',
    },
    {
        id: 9,
        name: 'Ask Question',
        image: questionIcon,
        link: '/student/question',
    },
    {
        id: 10,
        name: 'Study Material',
        image: studyMaterialIcon,
        link: '/student/studymaterial',
    },
    {
        id: 11,
        name: 'Account',
        image: accountIcon,
        icon: chevron,
        link: '#',
    },
    {
        id: 12,
        name: 'Settings',
        image: settingIcon,
        link: '#',
    },
]
export default function TeacherDashboardLayout({ children }) {
    return (
      <div className="flex">
        <Menu MenuList={MenuList}/>
        {children}
      </div>
    );
  }
  