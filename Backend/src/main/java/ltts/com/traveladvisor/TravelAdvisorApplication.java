package ltts.com.traveladvisor;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan("ltts.com")
@EntityScan("ltts.com.model")
@EnableJpaRepositories(basePackages= {"ltts.com.usersjpa","ltts.com.facilitiesjpa"})

public class TravelAdvisorApplication {

	public static void main(String[] args) {
		SpringApplication.run(TravelAdvisorApplication.class, args);
		System.out.println("app started");
	}

}
