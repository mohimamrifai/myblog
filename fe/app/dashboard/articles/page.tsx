import { ArticlesTable } from '@/components/articles-table'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div>
        <Button asChild>
          <Link href="/dashboard/articles/create">Tambah Artikel</Link>
        </Button>
        <ArticlesTable />
    </div>
  )
}
