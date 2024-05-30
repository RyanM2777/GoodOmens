"use client"
const people = [
    {
      name: 'Lauren',
      role: '@LaurenMcneeTattoo',
      imageUrl:
        '/ProfileLauren.jpeg',
    },
    {
        name: 'Emily',
        role: '@hvntertattoos',
        imageUrl:
          '/ProfileEmily.jpeg',
      },
      {
        name: 'Steven',
        role: '@stevenblance',
        imageUrl:
          '/ProfileSteven.jpg',
      },
      {
        name: 'Iain',
        role: '@tattoosbyhank1981',
        imageUrl:
          '/ProfileIain.jpg',
      },
  ]
  
  export default function Example() {
    return (
      <div className="bg-tealGreen-100 py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet the Artists</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Each expert brings their own artistic flair and attention to detail, ensuring that every piece is not only beautiful but also safely and expertly crafted.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full object-cover" src={person.imageUrl} alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                </div>
                            </div>
                            
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
  }
  
