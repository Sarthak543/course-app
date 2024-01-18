package com.application.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.application.Dao.CourseDao;
import com.application.entities.Course;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseDao courseDao;

	@Override
	public List<Course> getCourses() {
		return this.courseDao.findAll();
	}

	@Override
	public Course getCourse(long id) {
		Optional<Course>c =this.courseDao.findById(id);
		if(c.isPresent())
			return c.get();
		return null;
	}

	@Override
	public Course addCourse(Course course) {
		try {
			System.out.println(course);
			courseDao.save(course);
			return course;
		} catch (Exception e) {
			return null;
		}

	}

	@Override
	public ResponseEntity<HttpStatus> update(Course course) {
		try {
			courseDao.save(course);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@Override
	public ResponseEntity<HttpStatus> deleteCourse(long id) {
		try {
			courseDao.deleteById(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

}
