package projetfin.barakelaw.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import projetfin.barakelaw.Enummer.Etat;

import javax.persistence.*;
import java.io.Serializable;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class Categorie implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String description;
    private String libelle;
    @Enumerated(EnumType.STRING)
    private Etat etat=Etat.actif;
    private String photo;



}
