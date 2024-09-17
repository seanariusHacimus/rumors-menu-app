import { useState } from 'react'
import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const categories = [
  { name: 'Kitchen', subcategories: ['Appetizers', 'Main Courses', 'Sides'] },
  { name: 'Coffee', subcategories: ['Hot Coffee', 'Iced Coffee', 'Espresso Drinks'] },
  { name: 'Desserts', subcategories: ['Cakes', 'Ice Cream', 'Pastries'] },
]

const menuItems = [
  { name: 'Bruschetta', volume: '200g', price: '$8.99', category: 'Kitchen', subcategory: 'Appetizers' },
  { name: 'Mozzarella Sticks', volume: '180g', price: '$7.99', category: 'Kitchen', subcategory: 'Appetizers' },
  { name: 'Spaghetti Carbonara', volume: '350g', price: '$14.99', category: 'Kitchen', subcategory: 'Main Courses' },
  { name: 'Grilled Salmon', volume: '300g', price: '$18.99', category: 'Kitchen', subcategory: 'Main Courses' },
  { name: 'Garlic Mashed Potatoes', volume: '200g', price: '$5.99', category: 'Kitchen', subcategory: 'Sides' },
  { name: 'Steamed Vegetables', volume: '180g', price: '$4.99', category: 'Kitchen', subcategory: 'Sides' },
  { name: 'Americano', volume: '12oz', price: '$3.50', category: 'Coffee', subcategory: 'Hot Coffee' },
  { name: 'Cappuccino', volume: '12oz', price: '$4.50', category: 'Coffee', subcategory: 'Hot Coffee' },
  { name: 'Iced Latte', volume: '16oz', price: '$4.99', category: 'Coffee', subcategory: 'Iced Coffee' },
  { name: 'Cold Brew', volume: '16oz', price: '$4.75', category: 'Coffee', subcategory: 'Iced Coffee' },
  { name: 'Espresso', volume: '2oz', price: '$2.99', category: 'Coffee', subcategory: 'Espresso Drinks' },
  { name: 'Macchiato', volume: '4oz', price: '$3.75', category: 'Coffee', subcategory: 'Espresso Drinks' },
  { name: 'Chocolate Cake', volume: '150g', price: '$6.99', category: 'Desserts', subcategory: 'Cakes' },
  { name: 'Cheesecake', volume: '180g', price: '$7.50', category: 'Desserts', subcategory: 'Cakes' },
  { name: 'Vanilla Ice Cream', volume: '120g', price: '$4.50', category: 'Desserts', subcategory: 'Ice Cream' },
  { name: 'Strawberry Sorbet', volume: '100g', price: '$4.99', category: 'Desserts', subcategory: 'Ice Cream' },
  { name: 'Croissant', volume: '80g', price: '$3.50', category: 'Desserts', subcategory: 'Pastries' },
  { name: 'Apple Turnover', volume: '100g', price: '$4.25', category: 'Desserts', subcategory: 'Pastries' },
]

export default function EnhancedMenuPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name)
  const [selectedSubcategory, setSelectedSubcategory] = useState(categories[0].subcategories[0])

  const filteredItems = menuItems.filter(
    item => item.category === selectedCategory && item.subcategory === selectedSubcategory
  )

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                className="cursor-pointer text-sm"
                onClick={() => {
                  setSelectedCategory(category.name)
                  setSelectedSubcategory(category.subcategories[0])
                }}
              >
                {category.name}
              </Badge>
            ))}
          </div>
          <Separator />
          <div className="flex flex-wrap gap-2">
            {categories.find(c => c.name === selectedCategory)?.subcategories.map((subcategory) => (
              <Badge
                key={subcategory}
                variant={selectedSubcategory === subcategory ? "secondary" : "outline"}
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
                  <p className="text-sm text-muted-foreground mb-2">{item.volume}</p>
                  <Badge variant="secondary">{item.subcategory}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="border-t mt-12">
        <div className="container mx-auto py-6 px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; 2023 Gourmet Haven. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a href="tel:+1234567890" className="flex items-center text-sm hover:text-primary transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              +1 (234) 567-890
            </a>
            <a href="mailto:info@gourmethaven.com" className="flex items-center text-sm hover:text-primary transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              info@gourmethaven.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}