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
        link: '/parents/attendance',
    },
    {
        id: 6,
        name: 'Result',
        image: resultIcon,
        link: '/parents/result',
    },
    {
        id: 7,
        name: 'Class Schedule',
        image: classScheduleIcon,
        link: '/parents/class_schedule',
    },
    {
        id: 8,
        name: 'Exam Routine',
        image: exmRoutineIcon,
        link: '/parents/exam_routine',
    },
    {
        id: 9,
        name: 'Ask Question',
        image: questionIcon,
        link: '/parents/question',
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
  