import React from 'react';
import {
    AboutSection,
    ArticlesSection,
    ContactSection,
    HeroSection,
    InterestsSection,
    Page,
    ProjectsSection,
    Seo,
} from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
    return (
        <>
            <Seo title="@rotten_caRot" />
            <Page useSplashScreenAnimation>
                <HeroSection sectionId="hero" />
                <ArticlesSection sectionId="blog" heading="Blog" sources={['Medium']} />
                <AboutSection sectionId="about" heading="Profile" />
                <InterestsSection sectionId="tools" heading="Tools (ordered by most to least proficient)" />
                <ProjectsSection sectionId="interests" heading="Areas of Expertise" />
                <ContactSection sectionId="contact" heading="Contact Me" />
            </Page>
        </>
    );
}
