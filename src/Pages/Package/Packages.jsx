import React from 'react';
import './Package.css';
import { TripDetailHero } from './TripDetailHero';

export const Packages = () => {
  return (
    <div className="trip-details">
      <div className="trip-description">
        <TripDetailHero />
        <div className="three-btn">
          <button>Trip Info</button>
          <button>Trip Itineerary</button>
          <button>Useful Info</button>
        </div>
        <div className="place-descriptions">
          <h1>Terai Wildlife Tour: An Unforgettable Experience in Nepal</h1>
          <p>
            The Terai region of Nepal, often referred to as the "granary of
            Nepal," is not just rich in agricultural land but also brimming with
            diverse wildlife and lush forests. A Terai Wildlife Tour offers an
            unparalleled opportunity to explore the unique flora and fauna of
            this region. Here's what you can expect:
          </p>

          <h1>1.Chitwan National Park</h1>
          <p>
            Lesser-Known Gem: Less crowded than Chitwan, offering a more
            secluded experience. <br />
            Wildlife: Tigers, elephants, rhinoceros, deer, and over 250 species
            of birds. <br />
            Activities: Jeep safaris, jungle walks, river rafting, and bird
            watching tours.
          </p>
          <h1>2. Bardia National Park</h1>
          <p>
            Lesser-Known Gem: Less crowded than Chitwan, offering a more
            secluded experience. <br />
            Wildlife: Tigers, elephants, rhinoceros, deer, and over 250 species
            of birds. <br />
            Activities: Jeep safaris, jungle walks, river rafting, and bird
            watching tours.
          </p>

          <h1>3. Koshi Tappu Wildlife Reserve</h1>
          <p>
            Bird Watcher's Paradise: Famous for its variety of bird species,
            including migratory birds from Siberia. <br />
            Wildlife: Includes wild buffaloes (Arna), deer, and dolphins in the
            Koshi River. <br />
            Activities: Bird watching, boat rides, and nature walks.
          </p>

          <h1>4. Shuklaphanta Wildlife Reserve</h1>
          <p>
            Grassland and Wetlands: Known for its extensive grasslands and wetlands. <br />
            Wildlife: Swamp deer, tigers, leopards, and various bird species.{' '}
            <br />
            Activities: Jungle safari, bird watching, and exploring the
            grasslands.
          </p>

          <h1>Key Highlights</h1>
          <p>
            Biodiversity: The Terai region's rich biodiversity makes it a haven
            for nature enthusiasts and wildlife photographers. <br />
            Cultural Experience: Interaction with local Tharu communities offers
            insights into their unique culture and traditions. <br />
            Conservation Efforts: Witness the efforts to preserve endangered
            species and their habitats.
          </p>

          <h1>Best Time to Visit</h1>
          <p>
            Autumn (October to December) and Spring (February to April): These
            seasons offer the best weather conditions for wildlife spotting and
            outdoor activities.
          </p>

          <h1>Tips for Travelers</h1>
          <p>
            Pack Wisely: Light, comfortable clothing, binoculars, camera,
            sunscreen, and insect repellent. <br />
            Stay Informed: Follow the guidelines provided by park authorities
            and respect the wildlife and their habitat. <br />
            Local Guides: Hiring local guides enhances the experience as they
            possess in-depth knowledge of the area and its wildlife.
          </p>

          <p>
            Embarking on a Terai Wildlife Tour is a journey into the heart of
            Nepal's natural beauty and biodiversity. Whether you are a wildlife
            enthusiast, a bird watcher, or simply seeking a unique adventure,
            the Terai region promises an unforgettable experience.
          </p>
        </div>
      </div>
      <div className="trip-map"></div>
    </div>
  );
};
