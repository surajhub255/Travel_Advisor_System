package ltts.com.facilitiesjpa;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ltts.com.model.Facilities;
@Repository
public interface FacilitiesJPARepository extends CrudRepository<Facilities,Integer>{
	
	@Modifying
	@Query("update Facilities f set f.contact=:contact,f.address=:address,f.details=:details,f.ratings=:ratings,f.image=:image where f.fid=:fid")
	int edit(@Param("contact") String contact,@Param("address") String address,@Param("details") String details,@Param("ratings") double ratings,@Param("image") String image,@Param("fid") int fid);
	
	@Query("select f from Facilities f where f.category=:category and f.city=:city")
	List<Facilities> findByCatLoc(@Param("category") String category,@Param("city") String city);	
	
	@Query("select f from Facilities f where f.city=:city order by category")
	List<Facilities> findByCity(@Param("city") String city);
	
	@Query("select f from Facilities f where f.fid=:fid")
	Facilities showByFid(@Param("fid") int fid);
	
	@Query("select f from Facilities f where f.category=:category")
	List<Facilities> findByCat(@Param("category") String category);
	
}
