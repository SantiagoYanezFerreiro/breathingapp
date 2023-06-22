import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.fromProgramSelection) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return (
    <div className="about-section-container">
      <h1 className="text-section-heading">About the Breathing App</h1>
      <div className="gallery">
        <div className="gallery-container">
          <img
            src="https://images.unsplash.com/photo-1602276507500-600178f63aae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnJlYXRoaW5nfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
            alt="Image 1"
            className="gallery-image"
          />

          <img
            src="https://images.unsplash.com/photo-1536007164800-b7f11331f35c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnJlYXRoaW5nfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
            alt="Image 3"
            className="gallery-image"
          />
        </div>
      </div>
      <p className="text-section-content content-program-1">
        The Breathing App offers a selection of diverse breathing programs, each
        designed to provide unique benefits and cater to different needs. These
        programs incorporate specific breathing patterns and intervals to guide
        you through a revitalizing and calming experience.
      </p>
      <h2 className="text-section-heading" id="RegularIntervals">
        Regular Intervals
      </h2>
      <p className="text-section-content content-program-2">
        The Regular Intervals program focuses on establishing a balanced
        breathing rhythm. It involves a structured pattern of inhaling, holding,
        and exhaling breaths at specific durations. This program helps regulate
        your breathing and promote a sense of calm and relaxation.
      </p>
      <details className="text-section text-section-dropdown">
        <summary className="text-section-content content-program-2">
          Advantages
        </summary>
        <ul className="text-section-content text-section-dropdown">
          <li>Promotes balanced breathing rhythm</li>
          <li> Enhances relaxation and calmness</li>
        </ul>
      </details>
      <details className="text-section text-section-dropdown">
        <summary className="text-section-content">Cautions and Details</summary>
        <ul className="text-section-content">
          <li>Promotes balanced breathing rhythm</li>
          <li> Enhances relaxation and calmness</li>
          <li>Inhale 8 seconds/Exhale 3 Seconds/Hold 2 Seconds</li>
        </ul>
      </details>
      <h2 className="text-section-heading" id="BoxBreathing">
        Box Breathing
      </h2>
      <p className="text-section-content content-program-3">
        The Box Breathing program follows a simple and effective technique that
        involves equal durations for each phase of the breath: inhale, hold,
        exhale, and hold again. This method promotes deep relaxation, stress
        reduction, and mental clarity.
      </p>
      <details className="text-section text-section-dropdown">
        <summary className="text-section-content">Advantages</summary>
        <ul className="text-section-content text-section-dropdown">
          <li>Induces deep relaxation and stress reduction</li>
          <li>Improves mental clarity and focus</li>
        </ul>
      </details>
      <details className="text-section text-section-dropdown">
        <summary className="text-section-content">Cautions and Details</summary>
        <ul className="text-section-content">
          <li>May cause dizziness or light-headedness in some individuals</li>
          <li> Avoid if you have a history of low blood pressure</li>
          <li>Intervals: Inhale 2 Seconds/Exhale 1 Second/Hold 1 Second</li>
        </ul>
      </details>
      <h2 className="text-section-heading" id="4-7-8Program">
        4-7-8 Program
      </h2>
      <p className="text-section-content content-program-4">
        The 4-7-8 Program involves a specific breathing pattern of inhaling for
        4 seconds, holding the breath for 7 seconds, and exhaling slowly for 8
        seconds. This program is renowned for its calming effect on the nervous
        system, reducing anxiety and inducing a state of tranquility.
      </p>
      <details className="text-section text-section-dropdown">
        <summary className="text-section-content">Advantages</summary>
        <ul className="text-section-content">
          <li>Calms the nervous system and reduces anxiety</li>
          <li> Promotes tranquility and peacefulness</li>
        </ul>
      </details>
      <details className="text-section text-section-dropdown">
        <summary className="text-section-content">Cautions and Details</summary>
        <ul className="text-section-content">
          <li>Not recommended for individuals with breathing disorders</li>
          <li> Avoid if you have respiratory conditions such as asthma</li>
          <li>Intervals: Inhale 9 Seconds/Exhale 9 Second/Hold 9 Second</li>
        </ul>
      </details>

      <h2 className="text-section-heading" id="BreathingHold">
        Breathing Hold
      </h2>
      <p className="text-section-content content-program-5">
        The Breathing Hold program focuses on increasing breath control and lung
        capacity. It incorporates longer breath-holding durations during the
        inhale and exhale phases, allowing you to strengthen your respiratory
        system and improve your overall breathing efficiency.
      </p>
      <details className="text-section text-section-dropdown">
        <summary className="text-section-content">Advantages</summary>
        <ul className="text-section-content">
          <li>Increases breath control and lung capacity</li>
          <li>Strengthens the respiratory system</li>
        </ul>
      </details>
      <details className="text-section text-section-dropdown">
        <summary className="text-section-content">Cautions and Details</summary>
        <ul className="text-section-content">
          <li>
            Start with shorter breath-holding durations and gradually increase
          </li>
          <li> Avoid if you have any cardiovascular or pulmonary conditions</li>
          <li>
            Intervals: Inhale 20 Seconds/Exhale 20 Seconds/Hold 20 Seconds
          </li>
        </ul>
      </details>
      <h2 className="text-section-heading" id="InfinityBreathing">
        Infinity Breathing
      </h2>
      <p className="text-section-content content-program-5">
        The Infinity Breathing program offers a dynamic and continuous breathing
        technique. It involves smoothly transitioning between inhaling and
        exhaling without any pauses or holds. This flowing breath pattern
        promotes a sense of fluidity, balance, and mindfulness. Infinity
        Breathing is a versatile program that can be adapted to different
        durations and intensities based on your preferences and needs.
      </p>
      <details className="text-section text-section-dropdown">
        <summary className="text-section-content">Advantages</summary>
        <ul className="text-section-content">
          <li>Promotes a sense of fluidity and mindfulness</li>
          <li> Enhances balance and relaxation</li>
        </ul>
      </details>
      <details className="text-section text-section-dropdown">
        <summary className="text-section-content">Cautions and Details</summary>
        <ul className="text-section-content">
          <li>
            May not be suitable for individuals with respiratory conditions
          </li>
          <li>
            {" "}
            Adjust the intensity and duration based on your comfort level
          </li>
          <li>Intervals: Inhale 2 Seconds/Exhale 1 Second/Hold 1 Second</li>
        </ul>
      </details>
      <h2 className="text-section-heading" id="CustomBreathing">
        Custom Breathing
      </h2>
      <p className="text-section-content content-program-5">
        The Custom Breathing program allows you to personalize your breathing
        experience according to your specific requirements. With custom
        breathing, you have the flexibility to define your own inhale, exhale,
        and hold durations. This program empowers you to explore and experiment
        with different breathing patterns and intervals, allowing you to tailor
        your practice to suit your individual goals, preferences, and current
        state of being.
      </p>
      <details className="text-section text-section-dropdown">
        <summary className="text-section-content">Advantages</summary>
        <ul className="text-section-content ">
          <li>Allows personalized breathing experience</li>
          <li> Tailor the practice to your goals and preferences</li>
        </ul>
      </details>
      <details className="text-section text-section-dropdown">
        <summary className="text-section-content">Cautions and Details</summary>
        <ul className="text-section-content">
          <li>Experiment with different patterns carefully</li>
          <li> Pay attention to your body response and adjust as needed</li>
          <li> Customized durations based on individual preferences</li>
        </ul>
      </details>
      <h2 className="text-section-heading">Conclusions</h2>
      <p className="text-section-content content-program-6">
        Each breathing program offers a unique experience and benefits. Feel
        free to explore and experiment with different programs to find the one
        that resonates best with your goals and preferences.
      </p>
      <p className="text-section-content content-program-6">
        Remember, consistency is key when practicing breathing techniques. Make
        it a part of your daily routine to experience the long-term benefits
        these programs can bring to your overall well-being.
      </p>
      <p className="text-section-content">
        Enjoy your journey of self-discovery and mindful breathing with the
        Breathing App!
      </p>
    </div>
  );
}
