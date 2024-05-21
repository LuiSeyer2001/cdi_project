import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import pb from '@lib/pocketbase'

export const useGetPatients = ({ page = 1, limit = 10, search = '' }) => {
  const queryClient = useQueryClient()

  return useQuery({
    queryKey: ['patients', { page, limit, search }],

    queryFn: async () => {
      const data = await pb.collection('patients').getList(page, limit, {
        sort: '-updated'
      })
      return data
    },

    onSuccess: (data) => {
      data.items?.forEach(patient => {
        queryClient.setQueryData(['patients', { id: patient.id }], patient)
      })
    }
  })
}

export const useGetPatient = (id) => {
  return useQuery({
    queryKey: ['patients', { id }],

    queryFn: async () => {
      const data = await pb.collection('patients').getOne(id, {
        expand: 'medicalBackgrounds,consultations.medic'
      })

      data.medicalBackgrounds = data.expand?.medicalBackgrounds || []
      data.consultations = data.expand?.consultations?.reverse() || []
      data.consultations.forEach(consultation => {
        consultation.medic = `${consultation.expand.medic.firstnames} ${consultation.expand.medic.lastnames}`
      })

      return data
    }
  })
}

export const useUpdatePatient = (id, updateType) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['patients', { id }],

    mutationFn: async (body) => {
      if (updateType === 'medicalBackground') {
        const { id: ID } = await pb.collection('medicalBackgrounds').create(body)
        const data = await pb.collection('patients').update(id, { 'medicalBackgrounds+': ID })
        return data
      }

      if (updateType === 'consultation') {
        const { id: ID } = await pb.collection('consultations').create(body)
        const data = await pb.collection('patients').update(id, { 'consultations+': ID })
        return data
      }
    },

    onSuccess: (data, id) => {
      queryClient.setQueryData(['patients', { id }], data)
    }
  })
}

export const useCreatePatient = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['patients'],

    mutationFn: async (body) => {
      const data = await pb.collection('patients').create(body)
      return data
    },

    onSuccess: (data) => {
      queryClient.setQueryData(['patients', { id: data.id }], data)
    }
  })
}
