function Hero() {
  return (
    <section className="bg-green-50 min-h-[80vh] flex items-center justify-between px-16">
      <div className="max-w-xl">
        <h1 className="text-6xl font-bold text-green-800">
          Fresh Vegetables
          <br />
          Delivered Daily
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Buy fresh vegetables, fruits, and groceries at the best prices with
          fast doorstep delivery.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800">
            Shop Now
          </button>

          <button className="border border-green-700 text-green-700 px-6 py-3 rounded-lg hover:bg-green-700 hover:text-white">
            Explore
          </button>
        </div>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=700"
          alt="Fresh Vegetables"
          className="w-[500px] rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
}

export default Hero;