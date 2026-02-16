"use client";

import { useEffect, useState } from "react";
import { Card, Container, SectionTitle, Button } from "@/components/ui";
import { auth } from "@/lib/auth";

export default function DashboardCoursesPage() {
  const [courses, setCourses] = useState<Array<{ id: string; title: string; slug: string; level: string; description: string }>>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCourses() {
      try {
        const result = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/courses`, { cache: "no-store" });
        if (!result.ok) throw new Error("Failed to load courses");
        const json = await result.json();
        setCourses(json || []);
      } catch (err) {
        console.error(err);
        setError("Could not load courses right now.");
      }
    }
    loadCourses();
  }, []);

  return (
    <Container>
      <section className="py-16 space-y-4">
        <SectionTitle title="My Courses" subtitle="Select a course and continue from your player dashboard." />
        {!auth.getToken() ? (
          <Card className="space-y-3">
            <p className="text-sm text-foreground/80">You are browsing as a guest. Log in to access purchased courses in the player.</p>
            <Button href="/login" variant="ghost">Log in</Button>
          </Card>
        ) : null}
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.id} className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">{course.level}</p>
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p className="text-sm text-foreground/75">{course.description}</p>
              <div className="flex flex-wrap gap-2">
                <Button href={`/courses/${course.slug}`} variant="ghost">Course page</Button>
                <Button href={`/dashboard/courses/${course.id}`}>Open player</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
}
