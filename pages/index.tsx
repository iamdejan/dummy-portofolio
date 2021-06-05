import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { Service } from "../type";

export default function index(): JSX.Element {
  return (
    <div className="flex flex-col px-6 pt-1">
      <h5 className="my-3 font-medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        pulvinar viverra dui, eget volutpat augue hendrerit et. Duis ut odio non
        libero suscipit ultrices nec id massa. Aliquam arcu ante, gravida ut
        felis eget, accumsan egestas enim. Duis sit amet aliquet mi, et
        venenatis ligula.
      </h5>

      <div
        className="p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{
          marginLeft: "-1.5rem",
          marginRight: "-1.5rem",
        }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">My Skills</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service: Service, i: number) => {
            return (
              <div
                key={i}
                className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
              >
                <ServiceCard service={service} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
