package com.application.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.application.entities.Course;


public interface CourseDao extends JpaRepository<Course, Long>{
	
}
