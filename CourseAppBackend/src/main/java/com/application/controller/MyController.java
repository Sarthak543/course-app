package com.application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.application.entities.Course;
import com.application.services.CourseService;

//Representational state transfer controller : data send in the form of json
@RestController
public class MyController {

	@Autowired
	private CourseService service;

//	Getting courses 
	@GetMapping(path = "/courses")
	@CrossOrigin(origins = "http://localhost:3000/")
	public List<Course> getCourses() {
		// ask service layer for help
		return this.service.getCourses();
	}

	@GetMapping("/courses/{id}")
	@CrossOrigin(origins = "http://localhost:3000/")
	public Course getCourse(@PathVariable String id) {
		return this.service.getCourse(Long.parseLong(id));
	}

	@PostMapping(path = "/courses", consumes = "application/json")
	@CrossOrigin(origins = "http://localhost:3000/")
	public Course addCourse(@RequestBody Course course) {
		return this.service.addCourse(course);
	}

	@PutMapping(path = "/courses", consumes = "application/json")
	@CrossOrigin(origins = "http://localhost:3000/")
	public ResponseEntity<HttpStatus> updateCourse(@RequestBody Course course) {
			return this.service.update(course);
	}

	@DeleteMapping(path = "/courses/{id}")
	@CrossOrigin(origins = "http://localhost:3000/")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String id) {
		return this.service.deleteCourse(Long.parseLong(id));
	}

}
