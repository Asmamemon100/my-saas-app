import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CTA from "@/components/CTA";
import CompanionsList from "@/components/CompanionsList";
import {recentSessions} from "@/constants";



const Page = () => {
  return (
    <main>

      <h1>Popular Companions</h1>
      <section className="home-section">
          <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the brain"
          subject="science"
          duration={45}
          color="#ffda6e"
          />
          <CompanionCard
              id="456"
              name=" Countsy the Number wizard"
              topic="Derivatives & Itegrals"
              subject="Maths"
              duration={30}
              color="#e5d0ff"
          />
          <CompanionCard
              id="789"
              name="Verba the vocabulary Builder"
              topic="language"
              subject="English Literature"
              duration={30}
              color="#BDE7FF"
          />

      </section>

        <section className="home-section">
            <CompanionsList
                title="Recently completed sessions"
                companions={recentSessions}
                classNames="w-2/3 max-lg=w-full"

            />
            <CTA />

        </section>
    </main>
  )
}
export default Page