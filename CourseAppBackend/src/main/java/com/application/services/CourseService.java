package com.application.services;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.application.entities.Course;

public interface CourseService {
	
	public List<Course> getCourses();

	public Course getCourse(long id);

	public Course addCourse(Course course);

	public ResponseEntity<HttpStatus> update(Course course);

	public ResponseEntity<HttpStatus> deleteCourse(long id);
}
