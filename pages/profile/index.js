import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ProfileLayout } from "../../layouts";
import { TopSection } from "../../src/Components/SubSection";
import {
  ProfileFirstStep,
  WorkExperienceSecondStep,
} from "../../src/Functional/SubSection";
/**
 * data_done for active full
 * half_active for half full
 * required for star
 * @returns
 */
const Profile = (props) => {
  const [form, setForm] = useState({
    step: 1,
  });
  const location = useRouter();
  const bookingParams = location.query?.bookingParams;
  return (
    <>
      <main>
        {/* Title Section Start */}
        <TopSection step={form?.step} />
        {form?.step === 1 ? (
          <ProfileFirstStep
            formData={form}
            location={location}
            updateForm={(formData) => setForm({ ...form, ...formData })}
          />
        ) : (
          <WorkExperienceSecondStep
            formData={form}
            location={location}
            updateForm={(formData) => setForm(formData)}
          />
        )}
      </main>
    </>
  );
};

export default Profile;
Profile.Layout = ProfileLayout;
