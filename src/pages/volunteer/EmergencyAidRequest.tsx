import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


interface AidRequest {
  aid_request_id: number;
  contact_number: string;
  district: string;
  divisional_secretariat: string;
  date_time: string;
}

const dummyData: AidRequest[] = [
  {
    aid_request_id: 101,
    contact_number: "0771234567",
    district: "Colombo",
    divisional_secretariat: "Colombo DS",
    date_time: "2025-07-22 10:30"
  },
  {
    aid_request_id: 102,
    contact_number: "0719876543",
    district: "Galle",
    divisional_secretariat: "Galle DS",
    date_time: "2025-07-22 11:00"
  }
];



interface EmergencyAidRequestProps {
  onBack?: () => void;
  onAddContribution?: (row: AidRequest) => void;
}

export default function EmergencyAidRequest({ onBack, onAddContribution }: EmergencyAidRequestProps) {
  const [requests, setRequests] = useState<AidRequest[]>([]);
  useEffect(() => {
    setRequests(dummyData);
    // Replace with API call if needed
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow p-8 mt-8">
      <button
        className="mb-6 px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-full font-semibold text-gray-700 transition"
        onClick={onBack}
      >
        ← Back
      </button>
      <h2 className="text-2xl font-bold text-center mb-6">Emergency Aid Requests</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-100">
            <th className="py-2 px-4 border">Aid Request ID</th>
            <th className="py-2 px-4 border">Contact Number</th>
            <th className="py-2 px-4 border">District</th>
            <th className="py-2 px-4 border">Divisional Secretariat</th>
            <th className="py-2 px-4 border">Date and Time</th>
            <th className="py-2 px-4 border">Add Contribution</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(req => (
            <tr key={req.aid_request_id} className="hover:bg-blue-50">
              <td className="py-2 px-4 border">{req.aid_request_id}</td>
              <td className="py-2 px-4 border">{req.contact_number}</td>
              <td className="py-2 px-4 border">{req.district}</td>
              <td className="py-2 px-4 border">{req.divisional_secretariat}</td>
              <td className="py-2 px-4 border">{req.date_time}</td>
              <td className="py-2 px-4 border text-center">
                {onAddContribution && (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full transition"
                    onClick={() => onAddContribution(req)}
                  >
                    Add Contribution
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
