"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Check, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

export function ContractsSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const contracts = [
    {
      id: 1,
      title: "Looking for Math Teacher",
      paymentType: "Fixed Price",
      client: {
        name: "Edward Smith",
        role: "Founder of MathTech",
        avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
        rating: 5.0
      },
      talent: {
        name: "Edward Smith",
        role: "Math Teacher",
        avatar: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg",
        rating: 5.0
      },
      description: "Seeking an experienced tutor for algebra and geometry. 60-minute sessions, twice weekly.",
      startDate: "Jan 15, 2025",
      endDate: "Not Estimated",
      status: "Ongoing",
      budget: "$2000"
    },
    {
      id: 2,
      title: "Looking for Science Tutor",
      paymentType: "Hourly",
      client: {
        name: "Alice Johnson",
        role: "Parent",
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        rating: 4.8
      },
      talent: {
        name: "Bob Lee",
        role: "Science Tutor",
        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        rating: 4.9
      },
      description: "Need a science tutor for high school chemistry. 90-minute sessions, once weekly.",
      startDate: "Feb 1, 2025",
      endDate: "Not Estimated",
      status: "Completed",
      budget: "$1200"
    },
    {
      id: 3,
      title: "English Language Coach Needed",
      paymentType: "Fixed Price",
      client: {
        name: "Michael Brown",
        role: "HR Manager",
        avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        rating: 4.7
      },
      talent: {
        name: "Sarah Kim",
        role: "English Coach",
        avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
        rating: 5.0
      },
      description: "Looking for a coach to improve business English communication skills.",
      startDate: "Mar 10, 2025",
      endDate: "Apr 10, 2025",
      status: "Ongoing",
      budget: "$1500"
    }
  ];

  const handlePrevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage(prev => prev + 1);

  return (
    <section className="px-4 md:px-8 lg:px-12 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
        <span className="inline-block w-3 h-3 bg-[#CCFF00] mr-3"></span>
        SUCCESSFUL <u className="underline underline-offset-4 decoration-[#BCED50]">CONTRACTS</u>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contracts.map(contract => (
          <ContractCard key={contract.id} contract={contract} />
        ))}
      </div>

      <div className="mt-12 flex justify-center space-x-4">
        <button 
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-white border border-gray-300 hover:bg-gray-100"
          }`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <ChevronLeft size={20} className="text-gray-700" />
        </button>
        <button 
          className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
          onClick={handleNextPage}
        >
          <ChevronRight size={20} className="text-gray-700" />
        </button>
      </div>
    </section>
  );
}

interface ContractCardProps {
  contract: {
    id: number;
    title: string;
    paymentType: string;
    client: { name: string; role: string; avatar: string; rating: number };
    talent: { name: string; role: string; avatar: string; rating: number };
    description: string;
    startDate: string;
    endDate: string;
    status: string;
    budget: string;
  };
}

const ContractCard = ({ contract }: ContractCardProps) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 p-4">
    <div className="flex justify-between mb-4">
      <div className="font-bold text-lg">CONTRACT</div>
      <div>
        <div className="font-bold">{contract.title}</div>
        <div className="text-sm text-gray-600">
          Payment Type: <span className="font-medium">{contract.paymentType}</span>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <ProfileSection type="Client" {...contract.client} />
      <ProfileSection type="Talent" {...contract.talent} />
    </div>

    <ContractDetails contract={contract} />
  </div>
);

const ContractDetails = ({ contract }: { contract: ContractCardProps["contract"] }) => (
  <>
    <div className="mb-4">
      <div className="flex items-center space-x-2 mb-1">
        <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
          <Check size={12} className="text-white" />
        </div>
        <span className="font-bold">Description</span>
      </div>
      <p className="text-sm text-gray-700 ml-7">{contract.description}</p>
    </div>

    <div>
      <div className="flex items-center space-x-2 mb-2">
        <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
          <Clock size={12} className="text-white" />
        </div>
        <span className="font-bold">Job Details</span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 ml-7">
        <div>
          <div className="text-sm text-gray-600">Start Date:</div>
          <div className="text-sm font-medium">{contract.startDate}</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Status:</div>
          <div className="text-sm font-medium">{contract.status}</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">End Date:</div>
          <div className="text-sm font-medium">{contract.endDate}</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Budget:</div>
          <div className="text-sm font-medium">{contract.budget}</div>
        </div>
      </div>
    </div>

    <div className="mt-4 p-4 bg-black text-white text-sm rounded-lg">
      Fixed-priced contract under the protection of payment system.
    </div>
  </>
);

interface ProfileSectionProps {
  type: "Client" | "Talent";
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

const ProfileSection = ({ type, name, role, avatar, rating }: ProfileSectionProps) => (
  <div className="flex items-center bg-gray-100 p-3 rounded-lg w-full">
    <div className="relative w-14 h-14">
      <Image src={avatar} alt={type} width={56} height={56} className="rounded-full object-cover" />
    </div>

    <div className="ml-3 flex flex-col flex-grow">
      <div className={`text-xs font-semibold px-2 py-1 rounded-full w-fit ${
        type === "Talent" ? "bg-[#CCFF00] text-black" : "bg-gray-300 text-gray-800"
      }`}>
        {type}
      </div>
      <div className="font-bold">{name}</div>
      <div className="text-xs text-gray-500">{role}</div>
    </div>
  </div>
);

const Star = ({ filled = false }: { filled?: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "#CCFF00" : "none"} stroke={filled ? "#CCFF00" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
