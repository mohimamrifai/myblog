import Article from '@/components/article'
import CategoryList from '@/components/category-list'
import SearchInput from '@/components/search-input'
import SubscribeForm from '@/components/subscribe-form'
import { Separator } from '@/components/ui/separator'
import React from 'react'

export default function Page() {
  return (
    <main className="px-[10%]">
      <SearchInput />
      <CategoryList />
      <Separator className='mt-10 hidden lg:block' />
      <Article />
      <SubscribeForm />
    </main>
  )
}
