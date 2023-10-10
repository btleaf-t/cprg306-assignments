import Image from 'next/image'
import React from 'react'
import StudentInfo from 'app/StudentInfo.js'
import Item from 'app/week3/item.js'
import NewItem from 'app/week4/new-item.js'
import Link from 'next/link'

export default function page() {
    return (
      <div>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo />
        <Link href="/app/week2/page.js">Week 2</Link>
        <Item />
        <Link href="/app/week3/page.js">Week 3</Link>
        <Link href="/app/week4/page.js">Week 4</Link>
      </div>
    );
  }
