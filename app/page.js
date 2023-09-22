import Image from 'next/link'
import StudentInfo from './StudentInfo'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 Assignment </h1>
      <StudentInfo/>
      <p><Link href="/week2">Week 2</Link></p>
    </main>
  )
}
