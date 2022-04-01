package projetfin.barakelaw.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Data
public class Log {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;
    @ManyToOne
    private Personnel personnel;
    @ManyToOne
    @JsonBackReference
    private Administrateur administrateur;

    private String action;

    private String typeActeur;
    private String nomComplet;

    private LocalDate date = LocalDate.now();
    private LocalTime heure = LocalTime.now();
}
