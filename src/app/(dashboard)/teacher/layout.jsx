import Menu from "@/app/components/Menu";
import TeacherIcon from '@/app/assets/user.svg'
import dashboardIcon from '@/app/assets/dashboard.svg'
import studentIcon from '@/app/assets/student.svg'
import attendanceIcon from '@/app/assets/attendance.svg'
import homeworkIcon from '@/app/assets/Homework.svg'
import solutionIcon from '@/app/assets/solution.svg'
import resultIcon from '@/app/assets/result.svg'
import classScheduleIcon from '@/app/assets/schedule.svg'
import studyMaterialIcon from '@/app/assets/material.svg'
import accountIcon from '@/app/assets/account.svg'
import settingIcon from '@/app/assets/settings.svg'
import chevron from '@/app/assets/chevron.svg'

const MenuList = [
    {
        id: 1,
        name: 'Teachers',
        image: TeacherIcon,
        icon: chevron,
        link: '#',
    },
    {
        id: 2,
        name: 'Dashboard',
        image: dashboardIcon,
        link: '#',
    },
    {
        id: 3,
        name: 'Student',
        image: studentIcon,
        icon: chevron,
        link: '#',
    },
    {
        id: 4,
        name: 'Attendance',
        image: attendanceIcon,
        link: '/teacher/attendance',
    },
    {
        id: 5,
        name: 'Homework',
        image: homeworkIcon,
        link: '/teacher/homework',
    },
    {
        id: 6,
        name: 'Solution',
        image: solutionIcon,
        link: '/teacher/solution',
    },
    {
        id: 7,
        name: 'Result',
        image: resultIcon,
        link: '/teacher/result',
    },
    {
        id: 8,
        name: 'Class Schedule',
        image: classScheduleIcon,
        link: '/teacher/schedule',
    },
    {
        id: 9,
        name: 'Study Material',
        image: studyMaterialIcon,
        link: '/teacher/studymaterial',
    },
    {
        id: 10,
        name: 'Account',
        image: accountIcon,
        icon: chevron,
        link: '',
    },
    {
        id: 11,
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
  