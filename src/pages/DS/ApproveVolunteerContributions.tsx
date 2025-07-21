import React, { useEffect, useState } from "react";

// Dummy type for volunteer contributions
interface VolunteerContribution {
  volunteer_id: number;
  volunteer_name: string;
  volunteer_contact: string;
  type_of_support: string;
  description: string;
  image: string;
  status: "Pending" | "Approved" | "Rejected";
}

export default function ApproveVolunteerContributions() {
  const [contributions, setContributions] = useState<VolunteerContribution[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [removedMessage, setRemovedMessage] = useState<string>("");

  useEffect(() => {
    // Replace with API call in production
    const dummy: VolunteerContribution[] = [
      {
        volunteer_id: 1,
        volunteer_name: "Kasun Perera",
        volunteer_contact: "0771234567",
        type_of_support: "Food Packets",
        description: "Distributed 50 food packets in Matara.",
        image: "https://via.placeholder.com/100x100.png?text=Food+Packets",
        status: "Pending"
      },
      {
        volunteer_id: 2,
        volunteer_name: "Nimali Silva",
        volunteer_contact: "0719876543",
        type_of_support: "Medical Supplies",
        description: "Provided first aid kits to 20 families.",
        image: "https://via.placeholder.com/100x100.png?text=Medical+Supplies",
        status: "Pending"
      }
    ];
    setContributions(dummy);
    setIsLoading(false);
  }, []);

  const handleAction = (id: number, action: "Approved" | "Rejected") => {
    setContributions(prev =>
      prev.map(c =>
        c.volunteer_id === id ? { ...c, status: action } : c
      )
    );
    setTimeout(() => {
      setContributions(prev => prev.filter(c => c.volunteer_id !== id));
      setRemovedMessage(`Contribution ${action.toLowerCase()} and removed.`);
      setTimeout(() => setRemovedMessage("") , 2500);
    }, 800);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-gray-100 rounded-2xl shadow p-8 mt-8 relative">
      <h2 className="text-2xl font-bold text-center mb-4">
        Approve Volunteer Contributions
      </h2>

      {isLoading ? (
        <p className="text-center text-gray-600">Loading contributions...</p>
      ) : contributions.length === 0 ? (
        <p className="text-center text-gray-600">
          No pending volunteer contributions found for your division.
        </p>
      ) : (
        <div className="flex flex-col gap-6">
          {contributions.map((c) => (
            <div
              key={c.volunteer_id}
              className="bg-white border border-black rounded-xl p-6 shadow flex flex-col gap-2"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex flex-col gap-2 pr-8">
                  {/* Volunteer ID removed from display */}
                  <div>
                    <span className="font-semibold">Name:</span>
                    <span className="ml-2">{c.volunteer_name}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Contact No:</span>
                    <span className="ml-2">{c.volunteer_contact}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Type of Support:</span>
                    <span className="ml-2">{c.type_of_support}</span>
                  </div>
                </div>
                <div>
                  <img src={c.image} alt={c.type_of_support} className="w-24 h-24 object-cover rounded border" />
                </div>
              </div>
              <div className="mt-2">
                <span className="font-semibold">Description:</span> {c.description}
              </div>
              <div className="flex gap-4 mt-2">
                <button
                  className="border border-black rounded px-6 py-2 font-semibold"
                  onClick={() => handleAction(c.volunteer_id, "Approved")}
                  disabled={c.status !== "Pending"}
                >
                  Approve
                </button>
                <button
                  className="border border-black rounded px-6 py-2 font-semibold"
                  onClick={() => handleAction(c.volunteer_id, "Rejected")}
                  disabled={c.status !== "Pending"}
                >
                  Reject
                </button>
                <span className={`ml-auto font-bold ${c.status === "Approved" ? "text-green-600" : c.status === "Rejected" ? "text-red-600" : "text-gray-600"}`}>
                  {c.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {removedMessage && (
        <>
          <div className="absolute inset-0 bg-black bg-opacity-30 z-40 transition-opacity animate-fadeIn"></div>
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl px-10 py-8 flex flex-col items-center animate-fadeIn">
              <div className="text-green-600 text-3xl mb-4 font-bold">✔</div>
              <div className="text-2xl font-semibold mb-4">{removedMessage}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
