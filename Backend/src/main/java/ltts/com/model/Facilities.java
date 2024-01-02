package ltts.com.model;

import java.awt.Image;
import java.util.Arrays;

import org.springframework.web.multipart.MultipartFile;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name="facilities")
public class Facilities {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@SequenceGenerator(name="id_generator", sequenceName = "id_seq")
	private int fid;
	@NonNull
	private String fname;
	@NonNull
	private String category;
	private String contact;
	@NonNull
	private String city;
	@NonNull
	private String location;
	@NonNull
	private String address;
	@NonNull
	private String details;
	private double ratings;
	
	private String image;

	public Facilities() {
		super();
	}

	public Facilities(int fid, String fname, String category, String contact, String city, String location,
			String address, String details, double ratings, String image) {
		super();
		this.fid = fid;
		this.fname = fname;
		this.category = category;
		this.contact = contact;
		this.city = city;
		this.location = location;
		this.address = address;
		this.details = details;
		this.ratings = ratings;
		this.image = image;
	}

	public int getFid() {
		return fid;
	}

	public void setFid(int fid) {
		this.fid = fid;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public double getRatings() {
		return ratings;
	}

	public void setRatings(double ratings) {
		this.ratings = ratings;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "Facilities [fid=" + fid + ", fname=" + fname + ", category=" + category + ", contact=" + contact
				+ ", city=" + city + ", location=" + location + ", address=" + address + ", details=" + details
				+ ", ratings=" + ratings + ", image=" + image + "]";
	}
	
}
