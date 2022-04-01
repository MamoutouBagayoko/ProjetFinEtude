package projetfin.barakelaw.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import projetfin.barakelaw.Models.Log;

import java.time.LocalDate;
import java.util.List;

public interface LogRepository extends JpaRepository<Log, Long> {
    List<Log> findLogByDate(LocalDate localDate);
    List<Log> getLogByDateGreaterThanEqualAndDateLessThanEqual(LocalDate min, LocalDate max);
}
