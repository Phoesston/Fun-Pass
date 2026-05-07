export type EquipmentType = 'party' | 'foam'
export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'expired'
export type InquiryStatus = 'pending' | 'confirmed' | 'partially_confirmed' | 'cancelled' | 'expired'

export interface Equipment {
    id: string
    name: string
    description: string
    category: string
    type: EquipmentType
    emoji: string
    color: string
    max_players: number | null
    tag: string | null
    quantity: number
    minimum_notice_days: number
    is_available: boolean
    created_at: string
    img_url: string | null
}

export interface BlackoutDate {
    id: string
    date: string
    reason: string | null
}

export interface Inquiry {
    id: string
    customer_name: string
    customer_email: string
    customer_phone: string | null
    message: string | null
    status: InquiryStatus
    reference_code: string
    submitted_at: string
    expires_at: string
    bookings?: Booking[]
}

export interface Booking {
    id: string
    inquiry_id: string
    equipment_id: string
    start_date: string
    end_date: string
    price_snapshot: number | null
    status: BookingStatus
    admin_note: string | null
    created_at: string
    equipment?: Equipment
    inquiry?: Inquiry
}

//Cart item used in front end before submission
export interface CartItem {
    equipment: Equipment
    startDate: string
    endDate: string
}

export interface InquiryFormData {
    customer_name: string
    customer_email: string
    customer_phone?: string
    message: string
    items: {
        equipment_id: string
        start_date: string
        end_date: string
    }[]
}