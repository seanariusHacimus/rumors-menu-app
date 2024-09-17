"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { categories, menuItems } from '../data';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const [selectedSubcategory, setSelectedSubcategory] = useState(
    categories[0].subcategories[0]
  );

  const filteredItems = menuItems.filter(
    (item) =>
      item.category === selectedCategory &&
      item.subcategory === selectedSubcategory
  );

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="mb-8 space-y-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category.name}
              variant={
                selectedCategory === category.name ? "default" : "outline"
              }
              className="cursor-pointer text-sm"
              onClick={() => {
                setSelectedCategory(category.name);
                setSelectedSubcategory(category.subcategories[0]);
              }}
            >
              {category.name}
            </Badge>
          ))}
        </div>
        <Separator />
        <div className="flex flex-wrap gap-2">
          {categories
            .find((c) => c.name === selectedCategory)
            ?.subcategories.map((subcategory) => (
              <Badge
                key={subcategory}
                variant={
                  selectedSubcategory === subcategory ? "secondary" : "outline"
                }
                className="cursor-pointer text-sm"
                onClick={() => setSelectedSubcategory(subcategory)}
              >
                {subcategory}
              </Badge>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.name} className="overflow-hidden">
            <CardContent className="p-4 flex items-center space-x-4">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src="/placeholder.svg"
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <span className="text-lg font-bold">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {item.volume}
                </p>
                <Badge variant="secondary">{item.subcategory}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
