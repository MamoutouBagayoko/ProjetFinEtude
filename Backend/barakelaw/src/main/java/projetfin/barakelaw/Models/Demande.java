package projetfin.barakelaw.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Enummer.StatuDemande;
import projetfin.barakelaw.Enummer.Vue;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Demande implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Temporal(TemporalType.DATE)
    private Date datedemande;
    @Enumerated(EnumType.STRING)
    private Etat etat=Etat.actif;
    @OneToOne
    private Utilisateur utilisateur;
    @OneToOne
    private Personnel personnel;
    @Enumerated (EnumType.STRING)
    private StatuDemande statuDemande=StatuDemande.Encours;
    @Enumerated(EnumType.STRING)
    private Vue vue = Vue.non_lu;
}
