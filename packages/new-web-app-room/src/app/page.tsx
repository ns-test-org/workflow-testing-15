import Calculator from '@/components/Calculator';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-light text-white text-center mb-8 tracking-wide">
          Mac Calculator
        </h1>
        <Calculator />
      </div>
    </div>
  );
}


