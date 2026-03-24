import React from "react";
import EndpointCard from "../EndpointCard";
import { ENDPOINTS } from "../../constants";

const ApiSection: React.FC = () => {
  return (
    <section id="api" className="mb-20">
      <h3 className="text-2xl font-bold text-white mb-8 border-b border-[#2b2d31] pb-4">
        API Endpoints
      </h3>
      <div className="space-y-4">
        {ENDPOINTS.map((endpoint) => (
          <EndpointCard
            key={endpoint.path}
            method={endpoint.method}
            path={endpoint.path}
            description={endpoint.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ApiSection;
