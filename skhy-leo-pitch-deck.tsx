import React, { useState } from 'react';
import { Moon, Satellite, Globe, Radio, Award, Target, TrendingUp, DollarSign, Users, Rocket } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Visualization for Problem Statement
const ProblemVisualization = () => {
  // Data representing imaging system limitations
  const imagingSystemData = [
    { system: 'Traditional Satellites', spatialResolution: 5, spectralBands: 10, costPerImage: 500000 },
    { system: 'Skhy LEO', spatialResolution: 1, spectralBands: 400, costPerImage: 50000 }
  ];

  const revisitFrequencyData = [
    { competitor: 'Competitor A', revisitDays: 14 },
    { competitor: 'Competitor B', revisitDays: 21 },
    { competitor: 'Skhy LEO', revisitDays: 1 }
  ];

  const costBarrierData = [
    { category: 'Traditional Hyperspectral', averageCost: 5000000 },
    { category: 'Skhy LEO Solution', averageCost: 1000000 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Spatial Resolution and Spectral Bands Comparison */}
      <div className="col-span-1 bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-bold mb-4 text-center">Imaging System Capabilities</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={imagingSystemData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="system" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="spatialResolution" fill="#8884d8" name="Spatial Resolution (m)" />
            <Bar dataKey="spectralBands" fill="#82ca9d" name="Spectral Bands" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Revisit Frequency Comparison */}
      <div className="col-span-1 bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-bold mb-4 text-center">Revisit Frequency</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revisitFrequencyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="competitor" />
            <YAxis label={{ value: 'Days Between Revisits', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Bar dataKey="revisitDays" fill="#FF6384">
              {revisitFrequencyData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.competitor === 'Skhy LEO' ? '#00C49F' : '#FF6384'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Cost Barrier Visualization */}
      <div className="col-span-1 bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-bold mb-4 text-center">Cost Comparison</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={costBarrierData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="averageCost"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {costBarrierData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [`${value.toLocaleString()}`, 'Average Cost']} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// Placeholder images (replace with actual images in production)
const PlaceholderImage = ({ width, height, text }) => (
  <div 
    className={`bg-gray-200 flex items-center justify-center text-gray-500`}
    style={{ width, height }}
  >
    {text}
  </div>
);

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Skhy LEO",
      subtitle: "Revolutionizing Earth Observation with Affordable Hyperspectral Imaging",
      content: (
        <div className="flex items-center justify-center space-x-8">
          <Satellite size={200} className="text-blue-600" />
          <div>
            <h2 className="text-4xl font-bold text-blue-800">Skhy LEO</h2>
            <p className="text-xl text-gray-700">Hyperspectral Satellite Constellation</p>
            <p className="text-lg text-gray-600 mt-4">Cost per Satellite: $1 Million USD</p>
          </div>
        </div>
      )
    },
    {
      title: "Problem Statement",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-red-700 mb-4">Key Challenges</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <Globe className="mr-3 text-red-500" />
                  <span>Data Gaps: Existing imaging systems lack spectral resolution to detect subtle changes</span>
                </li>
                <li className="flex items-center">
                  <DollarSign className="mr-3 text-red-500" />
                  <span>Cost Barrier: Traditional hyperspectral satellites are expensive</span>
                </li>
                <li className="flex items-center">
                  <Target className="mr-3 text-red-500" />
                  <span>Low Revisit Frequencies hinder timely insights</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="text-xl font-semibold text-red-800 mb-2">Industry Impact</h4>
              <p className="text-gray-700">
                These limitations result in:
                <ul className="list-disc list-inside ml-2">
                  <li>Delayed environmental monitoring</li>
                  <li>Increased costs for critical industries</li>
                  <li>Reduced accuracy in predictive analysis</li>
                </ul>
              </p>
            </div>
          </div>
          <ProblemVisualization />
        </div>
      )
    },
    {
      title: "Solution: Affordable Hyperspectral Satellites",
      content: (
        <div className="grid grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-4">Key Solution Features</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <Satellite className="mr-3 text-green-500" />
                <span>High-Resolution Imaging: &lt;1m spatial resolution</span>
              </li>
              <li className="flex items-center">
                <Radio className="mr-3 text-green-500" />
                <span>Low-Cost Design: Commercial off-the-shelf components</span>
              </li>
              <li className="flex items-center">
                <TrendingUp className="mr-3 text-green-500" />
                <span>Flexible Deployment: Daily global revisits</span>
              </li>
              <li className="flex items-center">
                <Award className="mr-3 text-green-500" />
                <span>AI-Powered Insights for multiple industries</span>
              </li>
            </ul>
          </div>
          <PlaceholderImage 
            width="400px" 
            height="300px" 
            text="Solution Visualization" 
          />
        </div>
      )
    },
    {
      title: "Market Opportunity",
      content: (
        <div className="grid grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Market Potential</h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Total Addressable Market (TAM):</strong> $8 Billion USD by 2030
              </li>
              <li>
                <strong>Serviceable Addressable Market (SAM):</strong> $2.5 Billion USD
              </li>
              <li>
                <strong>Key Clients:</strong> 
                <div className="flex items-center mt-2">
                  <Users className="mr-3 text-blue-500" />
                  Governments, Enterprises, Research Institutions
                </div>
              </li>
            </ul>
          </div>
          <PlaceholderImage 
            width="400px" 
            height="300px" 
            text="Market Size Visualization" 
          />
        </div>
      )
    },
    {
      title: "Competitive Advantage",
      content: (
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-3">Feature</th>
                <th className="p-3">Our Satellite</th>
                <th className="p-3">Competitors</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">Cost per Satellite</td>
                <td className="p-3 text-green-600">$1 Million</td>
                <td className="p-3 text-red-600">$3–5 Million</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Spatial Resolution</td>
                <td className="p-3 text-green-600">&lt;1m</td>
                <td className="p-3 text-red-600">2–5m</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Revisit Frequency</td>
                <td className="p-3 text-green-600">Hourly</td>
                <td className="p-3 text-red-600">Weekly to Monthly</td>
              </tr>
              <tr>
                <td className="p-3">AI Integration</td>
                <td className="p-3 text-green-600">Embedded</td>
                <td className="p-3 text-red-600">Limited</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      title: "Technology Roadmap",
      content: (
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Key Innovations</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <Rocket className="mr-3 text-purple-500" />
                Miniaturized Optical Systems (400+ spectral bands)
              </li>
              <li className="flex items-center">
                <Radio className="mr-3 text-purple-500" />
                AI Edge Processing with onboard data compression
              </li>
              <li className="flex items-center">
                <Satellite className="mr-3 text-purple-500" />
                Efficient Manufacturing using 3D printing
              </li>
              <li className="flex items-center">
                <Moon className="mr-3 text-purple-500" />
                Shared Launches to reduce deployment costs
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Deployment Timeline</h3>
            <table className="w-full text-left">
              <tbody>
                <tr className="border-b">
                  <td className="p-2">Prototype Development</td>
                  <td className="p-2 font-bold">Q1 2025</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Launch First Satellite</td>
                  <td className="p-2 font-bold">Q4 2025</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Deploy 10 Satellites</td>
                  <td className="p-2 font-bold">Q2 2026</td>
                </tr>
                <tr>
                  <td className="p-2">Full Constellation (50+)</td>
                  <td className="p-2 font-bold">Q4 2027</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      title: "Team",
      content: (
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">Leadership Team</h3>
            <ul className="space-y-4">
              <li>
                <strong>Founder/CEO: Babu Priyavrat</strong>
                <p className="text-gray-600">A visionary leader with a proven track record in AI-driven solutions and strategic program management.</p>
              </li>
              <li>
                <strong>Space Launch Program Director: Deb</strong>
                <p className="text-gray-600">Over 20 years of experience in satellite launches, operational excellence, and space systems engineering.</p>
              </li>
            </ul>
          </div>
          <PlaceholderImage 
            width="400px" 
            height="300px" 
            text="Team Photo" 
          />
        </div>
      )
    },
    {
      title: "Funding Requirements",
      content: (
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-teal-700 mb-4">Funding Breakdown</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Total Funding Sought:</strong> $20 Million USD
              </li>
              <li>
                <strong>Use of Funds:</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>$8M for R&D</li>
                  <li>$5M for Manufacturing and Testing</li>
                  <li>$5M for Satellite Launches</li>
                  <li>$2M for Marketing and Customer Acquisition</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="bg-teal-50 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-teal-800 mb-4">Call to Action</h4>
            <p className="mb-4">Join us in redefining Earth observation.</p>
            <div className="space-y-2">
              <p><strong>Contact:</strong> [Email Address]</p>
              <p><strong>Website:</strong> [Website Link]</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="p-6 bg-blue-600 text-white flex justify-between items-center">
            <h1 className="text-3xl font-bold">Skhy LEO Pitch Deck</h1>
            <div className="text-lg">
              Slide {currentSlide + 1} of {slides.length}
            </div>
          </div>
          
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              {slides[currentSlide].title}
            </h2>
            
            <div className="min-h-[500px]">
              {slides[currentSlide].content}
            </div>
          </div>
          
          <div className="p-4 bg-gray-100 flex justify-between">
            <button 
              onClick={prevSlide} 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Previous
            </button>
            <button 
              onClick={nextSlide} 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;
