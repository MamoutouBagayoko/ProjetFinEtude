package projetfin.barakelaw.ServiceImplemente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetfin.barakelaw.Models.Administrateur;
import projetfin.barakelaw.Models.Log;
import projetfin.barakelaw.Models.Personnel;
import projetfin.barakelaw.Repository.LogRepository;
import projetfin.barakelaw.Services.LogService;

import java.time.LocalDate;
import java.util.List;

@Service
public class LogServiceImplement implements LogService {
    @Autowired
    LogRepository logRepository;

    @Override
    public Log ajoutLOg(Log log) {
        return logRepository.save(log);
    }

    @Override
    public List<Log> afficherLog() {
        return logRepository.findAll();
    }

    @Override
    public Log afficherLgBById(Long id) {
        return logRepository.findById(id).get();
    }

    /**@Override
    public List<Log> afficherByActeur(String acteur, Long id) {

    return logRepository.findByTypeActeurAndIdActeur(acteur,id);
    }**/

    @Override
    public List<Log> getLogByDate(LocalDate localDate) {
        return logRepository.findLogByDate(localDate);
    }

    @Override
    public List<Log> getLogByMonth(int year, int month) {
        LocalDate initial = LocalDate.of(year, month, 1);
        LocalDate start = initial.withDayOfMonth(1);
        LocalDate end = initial.withDayOfMonth(initial.lengthOfMonth());
        return logRepository.getLogByDateGreaterThanEqualAndDateLessThanEqual(start, end);
    }

    @Override
    public List<Log> getLogBetweenInterval(LocalDate min, LocalDate max) {
        return logRepository.getLogByDateGreaterThanEqualAndDateLessThanEqual(min, max);
    }

    public void addLog(Personnel user, String typeActeur, String nomComplet, String action)
    {
        Log log = new Log();
        log.setPersonnel(user);
        log.setTypeActeur(typeActeur);
        log.setNomComplet(nomComplet);
        log.setAction(action);
        logRepository.save(log);
    }

    public void addLogAdmin(Administrateur administrateur, String typeActeur, String nomComplet, String action)
    {
        Log log = new Log();
        log.setAdministrateur(administrateur);
        log.setTypeActeur(typeActeur);
        log.setNomComplet(nomComplet);
        log.setAction(action);
        logRepository.save(log);
    }
}
