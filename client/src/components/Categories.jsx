const categories = [
  { id: 1, name: "Leafy Vegetables", emoji: "🥬" },
  { id: 2, name: "Root Vegetables", emoji: "🥕" },
  { id: 3, name: "Fresh Vegetables", emoji: "🍅" },
  { id: 4, name: "Fruits", emoji: "🍎" },
  { id: 5, name: "Grains", emoji: "🌾" },
  { id: 6, name: "Herbs", emoji: "🌿" },
];

function Categories() {
  return (
    <section className="py-16 px-8 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-green-50 rounded-xl p-6 text-center cursor-pointer shadow hover:shadow-lg hover:scale-105 transition"
          >
            <div className="text-5xl">{category.emoji}</div>
            <h3 className="mt-4 font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;