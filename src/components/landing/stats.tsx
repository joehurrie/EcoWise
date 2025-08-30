const stats = [
  { value: '14K+', label: 'Products in our database' },
  { value: '520 tCO2e', label: 'Carbon Emmission Saved' },
  { value: '87K+', label: 'Community members' },
];

export function Stats() {
  return (
    <section className="bg-[#A6E22E] py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#F5F5F5] rounded-xl p-6 text-center shadow-md">
              <h3 className="text-3xl font-bold text-[#333333] mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
